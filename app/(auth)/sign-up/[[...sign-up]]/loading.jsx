import { Loader } from "@/components/ui/loader";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader
        words={[
          "setting up account",
          "preparing workspace",
          "configuring profile",
          "almost ready",
          "setting up account",
        ]}
      />
    </div>
  );
}
