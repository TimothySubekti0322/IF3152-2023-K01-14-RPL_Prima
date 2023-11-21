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

async function authorizedOwner(
  req: Request
): Promise<boolean | undefined | object> {
  try {
    const authHeader = req.headers.get("Authorization");
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
      if (decoded && typeof decoded === "object") {
        const role = decoded.role;
        if (role === "Owner") {
          return true;
        } else {
          return false;
        }
      } else {
        return { message: "Invalid token", status: 401 };
      }
    }
  } catch (error) {}
}

export default authorized;
