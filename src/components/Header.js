import React from "react";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
		<div className="flex flex-row">
			<div className="container mx-auto">Логотип | Меню</div>
			<div>
				<picture></picture>
				<a>Получить карту маршрутов</a>
			</div>
			<div>
				<picture></picture>
				<a>Связаться для консультации</a>
			</div>
		</div>

      </header>
  );
}
