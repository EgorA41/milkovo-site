export default function Stats() {
  const data = [
    { value: "7", label: "НАСЕЛЕННЫХ ПУНКТОВ" },
    { value: "9", label: "ТЫС. ЧЕЛ. НАСЕЛЕНИЕ" },
    { value: "10", label: "МАРШРУТОВ" },
  ];

  return (
    <div className="flex space-x-12 text-center">
      {data.map((item, i) => (
        <div key={i}>
          <p className="text-4xl font-bold text-teal-400">{item.value}</p>
          <p className="text-sm uppercase text-gray-300">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
