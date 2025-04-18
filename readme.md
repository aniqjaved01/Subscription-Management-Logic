# Subscription Managment Logic

This is a simple javascript script that checks the status of a user's subscription based on a start date and duration in months. It determines whether a subscription is active, ending today, or has already ended.

## Features

- Calculates the remaining days of a subscription
- Differentiates between:
  - Active subscriptions
  - Subscriptions ending today
  - Expired subscriptions
- Comes with test cases for validation

## Usage

1. **Clone the repository** or download the file `task1.js`.

2. **Run the script using Node.js:**

   ```bash
   node task1.js

## Example Output

```sh
Test Case (Expired): Your subscription has ended.
Test Case (Ending Soon): Your subscription is active. 2 day(s) remaining.
Test Case (Active): Your subscription is active. 259 day(s) remaining.
Test Case (Ending Today): Your subscription ends today.
Test Case (Short Subscription): Your subscription is active. 25 day(s) remaining.
```

## Notes

Make sure your system date and time are accurate, as the script relies on new Date() for the current time.

All test cases use UTC date format for consistency.
