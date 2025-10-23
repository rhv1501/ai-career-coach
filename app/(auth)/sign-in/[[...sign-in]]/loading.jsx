import { Loader } from "@/components/ui/loader";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader
        words={[
          "authenticating",
          "securing session",
          "validating user",
          "almost ready",
          "authenticating",
        ]}
      />
    </div>
  );
}
