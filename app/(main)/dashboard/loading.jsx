import { Loader } from "@/components/ui/loader";

export default function Loading() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <Loader
        words={[
          "analyzing trends",
          "gathering insights",
          "preparing data",
          "calculating metrics",
          "analyzing trends",
        ]}
      />
    </div>
  );
}
