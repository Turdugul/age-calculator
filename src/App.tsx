import { useState } from 'react';


function App() {
  const [birthDate, setBirthDate] = useState<string>('');
  const [age, setAge] = useState<string>('');

  const calculateAge = () => {
    if (!birthDate) {
      setAge('Please enter a valid date.');
      return;
    }

    const today = new Date();
    const birth = new Date(birthDate);

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    if (months < 0) {
      years--;
      months += 12;
    }

    let days = today.getDate() - birth.getDate();
    if (days < 0) {
      months--;
      const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += previousMonth.getDate();
    }

    if (years < 0) {
      setAge('Invalid birthdate.');
    } else {
      setAge(`You are ${years} years, ${months} months, and ${days} days old.`);
    }
   
  };

  return (
    <div className="min-h-screen bg-slate-300 flex flex-col items-center justify-center px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Age Calculator</h1>

        <label htmlFor="birthDate" className="block text-sm font-medium text-gray-600 mb-2">
          Enter your birth date:
        </label>
        <input
          type="date"
          id="birthDate"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />

        <button
          className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          onClick={calculateAge}
        >
          Calculate Age
        </button>

        {age && (
          <p className="mt-4 text-center text-lg font-medium text-gray-700">{age}</p>
        )}
      </div>
    </div>
  );
}

export default App;
