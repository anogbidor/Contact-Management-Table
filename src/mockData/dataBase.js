const generateUniqueId = () => {
  return Date.now() + Math.floor(Math.random() * 1000)
}

const endPoint = [
  {
    id: generateUniqueId(),
    name: 'John Doe',
    email: 'john.doe@example.com',
    company: 'ABC Corp',
  },
  {
    id: generateUniqueId(),
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    company: 'XYZ Enterprises',
  },
  {
    id: generateUniqueId(),
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    company: 'Widgets Inc',
  },
  {
    id: generateUniqueId(),
    name: 'Alice Williams',
    email: 'alice.williams@example.com',
    company: 'Global Tech',
  },
  {
    id: generateUniqueId(),
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    company: 'Innovate Solutions',
  },
  {
    id: generateUniqueId(),
    name: 'David Lee',
    email: 'david.lee@example.com',
    company: 'Creative Labs',
  },
  {
    id: generateUniqueId(),
    name: 'Anna Atalay',
    email: 'anna.atalay@example.com',
    company: 'Tech Wizards',
  },
  {
    id: generateUniqueId(),
    name: 'Frank Thomas',
    email: 'frank.thomas@example.com',
    company: 'NextGen Solutions',
  },
  {
    id: generateUniqueId(),
    name: 'Grace Johnson',
    email: 'grace.johnson@example.com',
    company: 'Prime Innovations',
  },
  {
    id: generateUniqueId(),
    name: 'Hank Wilson',
    email: 'hank.wilson@example.com',
    company: 'Modern Web LLC',
  },
  {
    id: generateUniqueId(),
    name: 'Ivy Moore',
    email: 'ivy.moore@example.com',
    company: 'Blue Sky Enterprises',
  },
  {
    id: generateUniqueId(),
    name: 'Jack Miller',
    email: 'jack.miller@example.com',
    company: 'Bright Ideas Corp',
  },
  {
    id: generateUniqueId(),
    name: 'Kathy Martinez',
    email: 'kathy.martinez@example.com',
    company: 'Pioneer Tech',
  },
  {
    id: generateUniqueId(),
    name: 'Liam Hernandez',
    email: 'liam.hernandez@example.com',
    company: 'Innovative Minds',
  },
  {
    id: generateUniqueId(),
    name: 'Mia Taylor',
    email: 'mia.taylor@example.com',
    company: 'Techies Inc',
  },
  {
    id: generateUniqueId(),
    name: 'Noah Anderson',
    email: 'noah.anderson@example.com',
    company: 'Digital Solutions',
  },
  {
    id: generateUniqueId(),
    name: 'Olivia Brown',
    email: 'olivia.brown@example.com',
    company: 'Top Notch Tech',
  },
  {
    id: generateUniqueId(),
    name: 'Paul Harris',
    email: 'paul.harris@example.com',
    company: 'Global Reach LLC',
  },
  {
    id: generateUniqueId(),
    name: 'Quincy White',
    email: 'quincy.white@example.com',
    company: 'Skyline Solutions',
  },
  {
    id: generateUniqueId(),
    name: 'Ruth King',
    email: 'ruth.king@example.com',
    company: 'Elite Tech',
  },
  {
    id: generateUniqueId(),
    name: 'Samuel Baker',
    email: 'samuel.baker@example.com',
    company: 'Tech Savvy Ltd',
  },
  {
    id: generateUniqueId(),
    name: 'Tina Garcia',
    email: 'tina.garcia@example.com',
    company: 'Creative Ventures',
  },
  {
    id: generateUniqueId(),
    name: 'Ursula Perez',
    email: 'ursula.perez@example.com',
    company: 'Peak Solutions',
  },
  {
    id: generateUniqueId(),
    name: 'Victor Collins',
    email: 'victor.collins@example.com',
    company: 'Smart Innovations',
  },
  {
    id: generateUniqueId(),
    name: 'Wendy Ramirez',
    email: 'wendy.ramirez@example.com',
    company: 'Global Reach Enterprises',
  },
  {
    id: generateUniqueId(),
    name: 'Xander Kelly',
    email: 'xander.kelly@example.com',
    company: 'NextLevel Tech',
  },
  {
    id: generateUniqueId(),
    name: 'Yara Scott',
    email: 'yara.scott@example.com',
    company: 'Epic Solutions',
  },
  {
    id: generateUniqueId(),
    name: 'Zachary Evans',
    email: 'zachary.evans@example.com',
    company: 'Innovate Creators',
  },
  {
    id: generateUniqueId(),
    name: 'Anna Brooks',
    email: 'anna.brooks@example.com',
    company: 'TechFuture Inc',
  },
  {
    id: generateUniqueId(),
    name: 'Brian Hall',
    email: 'brian.hall@example.com',
    company: 'NextStep Solutions',
  },
]

export const fetchMockData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(endPoint)
    }, 1000) // Simulating a 2-second delay
  })
}
