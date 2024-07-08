import { Button } from "gs-awds";

export async function User() {
  return (
    <form
      action={async () => {
        "use server";
      }}
    >
      <Button variant="outline">Sign In</Button>
    </form>
  );
}
