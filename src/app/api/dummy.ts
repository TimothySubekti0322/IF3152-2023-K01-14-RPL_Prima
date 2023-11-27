export default function handler() {
  return GET();
}

export const GET = async () => {
  return { message: "Hello from Next.js!" };
};
