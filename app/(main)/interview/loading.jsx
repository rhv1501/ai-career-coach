import { Loader } from "@/components/ui/loader";

export default function Loading() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <Loader
        words={[
          "analyzing questions",
          "preparing interview",
          "setting up session",
          "loading scenarios",
          "analyzing questions",
        ]}
      />
    </div>
  );
}
