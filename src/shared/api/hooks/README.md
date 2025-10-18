# API Hooks

Коллекция React Query хуков для работы с API на основе OpenAPI schema.

## Структура

Все хуки организованы по доменам и следуют единому паттерну:

- ✅ Типизация через OpenAPI schema
- ✅ React Query для кэширования и инвалидации
- ✅ Автоматическая инвалидация связанных запросов
- ✅ Единообразные query keys
- ✅ Обработка ошибок

## Доступные хуки

### 🔐 Аутентификация (`use-auth.ts`)

- `useLogin()` - вход пользователя
- `useSignUp()` - регистрация
- `useRestorePassword()` - восстановление пароля
- `useSendEmailOtp()` - отправка OTP кода
- `useValidateOtp()` - валидация OTP
- `logout()` - выход
- `getCurrentUser()` - получить текущего пользователя
- `isAuthenticated()` - проверка авторизации

### 👤 Пользователи (`use-users.ts`)

- `useUser(id)` - получить пользователя по ID
- `useCurrentUserProfile()` - профиль текущего пользователя
- `useCreateUser(data)` - создать пользователя
- `useDeleteUser()` - удалить пользователя

### 📝 Профиль (`use-profile.ts`)

- `useProfile()` - получить свой профиль
- `useUserProfile(userId)` - получить публичный профиль пользователя
- `useCreateProfile(data)` - создать профиль
- `useUpdateProfile()` - обновить профиль
- `useUpdateSocialLinks()` - обновить социальные ссылки
- `useUpdateProfilePreferences()` - обновить настройки

### 📊 Статистика (`use-statistics.ts`)

- `useMyStatistics()` - статистика текущего пользователя
- `useLeaderboard(params)` - таблица лидеров
- `useTopFans(params)` - топ фанаты
- `useUserStatistics(userId)` - статистика пользователя

### ✅ Задания (`use-tasks.ts`)

- `useTasks(params)` - список заданий
- `useTask(id)` - задание по ID
- `useMyTeamsTasks()` - задания команд пользователя
- `useMyTasks()` - задания пользователя
- `useMyActiveTasks()` - активные задания
- `useMyTaskStats()` - статистика заданий
- `useAssignTask()` - назначить задание
- `useStartTask()` - начать задание
- `useCompleteTask()` - завершить задание

### ⚽ Команды (`use-teams.ts`)

- `useTeams(params)` - список команд
- `useTeam(id)` - команда по ID
- `useSearchTeams(query)` - поиск команд
- `useTeamsBySport(sportType)` - команды по виду спорта

### ❤️ Избранные команды (`use-favorite-teams.ts`)

- `useFavoriteTeams()` - список избранных команд
- `useCheckFavoriteTeam(teamId)` - проверить избранную команду
- `useAddFavoriteTeam()` - добавить в избранное
- `useRemoveFavoriteTeam()` - убрать из избранного
- `useToggleFavoriteTeam()` - переключить статус избранного

### 🛍️ Продукты (`use-products.ts`)

- `useProducts(params)` - список продуктов
- `useProduct(id)` - продукт по ID
- `useSearchProducts(query)` - поиск продуктов
- `useProductsByCategory(category)` - продукты по категории
- `useMyTeamsProducts()` - продукты команд пользователя

### 📦 Заказы (`use-orders.ts`)

- `useMyOrders(params)` - заказы пользователя
- `useOrder(id)` - заказ по ID
- `useCreateOrder()` - создать заказ
- `useCancelOrder()` - отменить заказ

### 📍 Адреса (`use-addresses.ts`)

- `useAddresses()` - список адресов
- `useAddress(id)` - адрес по ID
- `useCreateAddress()` - создать адрес
- `useUpdateAddress()` - обновить адрес
- `useDeleteAddress()` - удалить адрес

### 🎓 Сертификаты (`use-certificates.ts`)

- `useMyCertificates()` - сертификаты пользователя
- `useCertificate(id)` - сертификат по ID
- `useVerifyCertificate(hash)` - проверить сертификат
- `useIssueCertificate()` - выдать сертификат
- `useRevokeCertificate()` - отозвать сертификат

### 🔔 Уведомления (`use-notifications.ts`)

- `useNotifications(params)` - список уведомлений
- `useNotification(id)` - уведомление по ID
- `useUnreadNotificationsCount()` - количество непрочитанных
- `useMarkNotificationRead()` - отметить прочитанным
- `useMarkAllNotificationsRead()` - отметить все прочитанными
- `useDeleteNotification()` - удалить уведомление

### 🌍 Страны (`use-countries.ts`)

- `useCountries(params)` - список стран
- `useCountry(id)` - страна по ID
- `useCountryByIso2(iso2)` - страна по ISO2 коду
- `useCountriesCount()` - количество стран

### 💰 Валюты (`use-currencies.ts`)

- `useCurrencies()` - список валют
- `useCurrency(code)` - валюта по коду
- `useExchangeRates()` - курсы валют
- `useExchangeRatesByBase(baseCurrency)` - курсы относительно базовой валюты
- `useConvertCurrency(params)` - конвертация валют

## Примеры использования

### Query хуки

```tsx
import { useMyTasks, useTeams } from "@/shared/api/hooks"

function TasksPage() {
  const { data: tasks, isLoading, error } = useMyTasks()
  const { data: teams } = useTeams({ isActive: true })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return <div>{tasks?.map((task) => <div key={task.id}>{task.title}</div>)}</div>
}
```

### Mutation хуки

```tsx
import { useCreateOrder, useAddFavoriteTeam } from "@/shared/api/hooks"

function CheckoutPage() {
  const createOrder = useCreateOrder()
  const addFavorite = useAddFavoriteTeam()

  const handleCheckout = async () => {
    try {
      const order = await createOrder.mutateAsync({
        productId: 1,
        quantity: 1,
      })
      console.log("Order created:", order)
    } catch (error) {
      console.error("Failed to create order:", error)
    }
  }

  const handleAddFavorite = (teamId: number) => {
    addFavorite.mutate(teamId, {
      onSuccess: () => {
        console.log("Team added to favorites")
      },
    })
  }

  return (
    <div>
      <button onClick={handleCheckout} disabled={createOrder.isPending}>
        {createOrder.isPending ? "Creating..." : "Create Order"}
      </button>
    </div>
  )
}
```

### Оптимистичные обновления

```tsx
import { useToggleFavoriteTeam } from "@/shared/api/hooks"

function TeamCard({ teamId, isFavorite }) {
  const { toggleFavorite, isPending } = useToggleFavoriteTeam()

  const handleToggle = () => {
    toggleFavorite(teamId, isFavorite)
  }

  return (
    <button onClick={handleToggle} disabled={isPending}>
      {isFavorite ? "❤️" : "🤍"}
    </button>
  )
}
```

## Query Keys

Каждая группа хуков экспортирует объект `*Keys` для удобного доступа к query keys:

```tsx
import { tasksKeys, teamsKeys } from "@/shared/api/hooks"
import { useQueryClient } from "@tanstack/react-query"

function SomeComponent() {
  const queryClient = useQueryClient()

  const refetchTasks = () => {
    queryClient.invalidateQueries({ queryKey: tasksKeys.all })
  }

  const refetchTeamDetails = (teamId: number) => {
    queryClient.invalidateQueries({ queryKey: teamsKeys.detail(teamId) })
  }

  // ...
}
```

## Автоматическая инвалидация

Mutation хуки автоматически инвалидируют связанные query:

- `useCreateOrder()` → инвалидирует `useMyOrders()`
- `useUpdateProfile()` → инвалидирует `useProfile()`
- `useAddFavoriteTeam()` → инвалидирует `useFavoriteTeams()` и `useCheckFavoriteTeam()`
- `useCompleteTask()` → инвалидирует `useMyTasks()`, `useMyActiveTasks()`, `useMyTaskStats()`

## Обработка ошибок

Все хуки выбрасывают ошибки в стандартном формате:

```tsx
import { useLogin } from "@/shared/api/hooks"

function LoginForm() {
  const login = useLogin()

  const handleSubmit = async (data) => {
    try {
      await login.mutateAsync(data)
    } catch (error) {
      // error.message содержит описание ошибки
      console.error("Login failed:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      {login.error && <div>Error: {login.error.message}</div>}
    </form>
  )
}
```

## Типизация

Все типы импортируются из schema.ts и полностью типизированы:

```tsx
import type { components } from "@/shared/api/schema"

type Task = components["schemas"]["TaskOutputDto"]
type Team = components["schemas"]["TeamOutputDto"]
type Product = components["schemas"]["ProductOutputDto"]
```
