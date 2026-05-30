export default function POUEFTreasuryApp() {
  const expenseCategories = [
    "Συνεδριάσεις - Μετακινήσεις - Διαμονές Δ.Σ.",
    "Επισκέψεις Δ.Σ. σε σωματεία και φορείς",
    "Νομικός Σύμβουλος - Δικαστήρια - Παράβολα",
    "Τηλέφωνα - Γραφείο - Αναλώσιμα",
    "Ταχυδρομείο - Courier",
    "Ελεγκτική Επιτροπή - Συνέδριο",
    "Λογιστής",
    "Ιστοσελίδα - Εφαρμογές",
    "ΑΔΕΔΥ",
    "Φόροι Τόκων - Προμήθειες Τραπεζών",
    "Μη Προϋπολογισμένες Δαπάνες"
  ];

  const stats = {
    bank: 71477.52,
    cash: 0,
    income: 0,
    expenses: 0,
  };

  const totalBalance = stats.bank + stats.cash + stats.income - stats.expenses;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                ΠΟΥΕΦ – Ηλεκτρονικό Βιβλίο Ταμείου
              </h1>
              <p className="text-gray-600 mt-2">
                Οικονομική Διαχείριση Ομοσπονδίας
              </p>
            </div>

            <div className="bg-gray-900 text-white px-5 py-3 rounded-2xl">
              <div className="text-sm opacity-70">Υπόλοιπο σε Μεταφορά</div>
              <div className="text-2xl font-bold">
                {totalBalance.toLocaleString("el-GR", {
                  style: "currency",
                  currency: "EUR",
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card title="Υπόλοιπο Τράπεζας" value={stats.bank} />
          <Card title="Υπόλοιπο Ταμείου" value={stats.cash} />
          <Card title="Συνολικά Έσοδα" value={stats.income} />
          <Card title="Συνολικά Έξοδα" value={stats.expenses} />
        </div>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-5">
      <div className="text-gray-500 text-sm mb-2">{title}</div>
      <div className="text-3xl font-bold text-gray-900">
        {value.toLocaleString("el-GR", {
          style: "currency",
          currency: "EUR",
        })}
      </div>
    </div>
  );
}
