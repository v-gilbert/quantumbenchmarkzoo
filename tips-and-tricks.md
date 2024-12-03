---
---
# Tips & tricks

- [Timestrings](#timestrings)
- [Advert variables](#advert-variables)

## Timestrings

ULX commands that accept a time value (e.g., `ulx ban`) also support timestrings. This makes it trivial to ban a user for a certain amount of hours, days, weeks or years.

| Code | Meaning |
|------|---------|
| `h`  | hours   |
| `d`  | days    |
| `w`  | weeks   |
| `y`  | years   |

**Examples**

- Ban player with name "Garry" for one hour: `ulx ban Garry 1h Spammer`
- Ban player with name "Garry" for two days and twelve hours: `ulx ban Garry 2d12h Minge`

## Advert variables

Adverts may contain certain variables. Before showing the advert, these variables are automatically replaced with the values they represent.

These variables will also work in `ulx welcomemessage`.

|    Variable     |                 Meaning                 |
|-----------------|-----------------------------------------|
| `%curmap%`      | Name of the map.                        |
| `%host%`        | Name of the server ("hostname").        |
| `%ulx_version%` | The ULX version running on your server. |
