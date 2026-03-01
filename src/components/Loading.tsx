export function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {/* message centered on full screen */}
      <span className="text-gray-200 font-semibold text-sm">
        Carregando... {/* text shown while waiting for data */}
      </span>
    </div>
  );
}
