function calculateSubscriptionStatus(user) {
    const { startDate, durationInMonths } = user;
  
    const start = new Date(startDate);
    const endDate = new Date(start);
    endDate.setMonth(endDate.getMonth() + durationInMonths);
  
    const today = new Date();
  
    if (today > endDate) {
      return "Your subscription has ended.";
    }
  
    const remainingTime = endDate - today;
    const remainingDays = Math.ceil(remainingTime / (1000 * 60 * 60 * 24));
  
    if (remainingDays === 0) {
      return "Your subscription ends today.";
    }
  
    return `Your subscription is active. ${remainingDays} day(s) remaining.`;
  }
  
  // Test cases
  const testCases = [
    {
      label: "Expired",
      user: {
        startDate: "2024-01-01T00:00:00Z",
        durationInMonths: 3, // Ends on April 1, 2024
      },
    },
    {
      label: "Ending Soon",
      user: {
        startDate: "2024-11-20T00:00:00Z",
        durationInMonths: 5, // Ends on April 20, 2025
      },
    },
    {
      label: "Active",
      user: {
        startDate: "2025-01-01T00:00:00Z",
        durationInMonths: 12, // Ends on Jan 1, 2026
      },
    },
    {
      label: "Ending Today",
      user: {
        startDate: "2024-10-18T00:00:00Z",
        durationInMonths: 6, // Ends today (April 18, 2025)
      },
    },
    {
      label: "Short Subscription",
      user: {
        startDate: "2025-04-13T00:00:00Z",
        durationInMonths: 1, // Ends on May 13, 2025
      },
    },
  ];
  
  // Run all test cases
  testCases.forEach(({ label, user }) => {
    console.log(`Test Case (${label}):`, calculateSubscriptionStatus(user));
  });