import jwt from "jsonwebtoken";

// Middleware function to verify JWT token
async function authorized(req: Request) {
  try {
    // Extract the token from the Authorization header
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return { message: "Authorization header missing", status: 401 };
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return { message: "Token missing", status: 401 };
    }

    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    if (!decoded) {
      return { message: "Invalid token", status: 401 };
    }

    return { message: "Token is valid", status: 200 };
  } catch (error) {
    return { message: "Invalid token", status: 401 };
  }
}

async function authorizedOwner(req: Request) {
  try {
    const auth = await authorized(req);
    if (auth.status !== 200) {
      return auth;
    }
    const authHeader = req.headers.get("Authorization");
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
      if (decoded && typeof decoded === "object") {
        const role = decoded.role;
        if (role === "Owner") {
          return { message: "You are authorized", status: 200 };
        }
      }
      return { message: "Access denied", status: 403 };
    } else {
      return { message: "Decode Failed", status: 500 };
    }
  } catch (error) {
    return { message: "Server Error", status: 500 };
  }
}

export { authorized, authorizedOwner };
