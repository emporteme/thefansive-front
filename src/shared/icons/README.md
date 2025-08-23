# Папка Icons

В этой папке находятся SVG-иконки, используемые в проекте. Все иконки реализованы в виде React-компонентов, что позволяет гибко управлять их стилями и размером с помощью CSS. В этом файле описано, как создать новую иконку, как использовать `className` и `currentColor` для управления стилями, а также как организовать экспорт всех иконок через файл `index.ts`.

## 1. Создание новой иконки

1. **Создайте новый файл в папке `icons`**. Имя файла должно соответствовать названию иконки, например: `new-icon.tsx`.
2. **Создайте компонент** в этом файле, используя шаблон ниже:

```jsx
import React from "react"

const NewIcon = ({ className = "" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className} // это важно
    >
      <path
        d="..." // Ваши SVG-пути
        stroke="currentColor" // это тоже важно
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default NewIcon
```

3. Обратите внимание на использование `stroke="currentColor"`, что позволяет управлять цветом иконки через CSS.

## 2. Использование `className` и `currentColor`

Каждая иконка принимает проп `className`, который можно использовать для задания стилей через CSS. Цвет иконки можно задать через свойство `color` в CSS, используя селектор класса, который вы передаете.

Пример использования иконки с изменением цвета:

```jsx
import React from "react"
import User from "./User"

function App() {
  return (
    <div>
      <User className="custom-icon" />
    </div>
  )
}

export default App
```

```css
.custom-icon {
  color: red; /* тут пример с CSS файла, можно использовать с тейлвиндом тоже */
}
```

Здесь `color: red;` применяется к SVG благодаря использованию `stroke="currentColor"` внутри компонента иконки.

## 3. Экспорт иконок через `index.ts`

Для упрощения импорта всех иконок мы используем файл `index.ts` в папке `icons`. В нем вручную экспортируются все компоненты, чтобы можно было импортировать их из одного места.

Пример файла `index.ts`:

```typescript
export { default as ArrowDown } from "./arrow-down"
export { default as Back } from "./back"
export { default as Exit } from "./exit"
export { default as Home } from "./home"
export { default as Plane } from "./plane"
export { default as Report } from "./report"
export { default as User } from "./user"
export { default as Users } from "./users"
```

Теперь вы можете импортировать иконки следующим образом:

```jsx
import { User, Home, Report } from "....../icons"
```

Это делает код более чистым и организованным, позволяя управлять всеми иконками из одного места.

## Заключение

Использование `currentColor` и CSS-классов для стилизации иконок делает их универсальными и легко настраиваемыми. Экспорт через `index.ts` помогает упростить процесс импорта, обеспечивая лучшую организацию кода.
