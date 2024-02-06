export function ErrorConverter(err: unknown, fallback?: string): string {
  if (typeof err === "string") {
    return err;
  }
  if (err instanceof Error) {
    return err.message;
  }
  if (
    err &&
    typeof err === "object" &&
    !Array.isArray(err) &&
    "message" in err
  ) {
    return String(err.message);
  }

  return fallback || "An error occurred. Please report this to the developer.";
}
