import { useState } from "react";
import { steps } from "./const";

export default function Home() {
  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    steps.forEach((step) => {
      step.elements.forEach((el) => {
        initial[el.id] = el.value || "";
      });
    });
    return initial;
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const currentStep = steps[currentStepIndex];

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    const missingFields: string[] = [];

    steps.forEach((step) => {
      step.elements.forEach((el) => {
        const isRequired = el.validations?.some((v) => v.type === "required");
        if (isRequired && !formData[el.id].trim()) {
          missingFields.push(el.label);
        }
      });
    });

    if (missingFields.length > 0) {
      setErrors(missingFields);
      setSubmitted(false);
    } else {
      setErrors([]);
      setSubmitted(true);
      console.log("✅ Formulaire valide :", formData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Questionnaire technique
        </h1>

        <div className="bg-gray-50 border rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            {currentStep.label}
          </h2>

          {currentStep.elements.map((el) => (
            <div key={el.id} className="mb-4">
              <label className="block mb-1 text-gray-800 font-medium">
                {el.label}
                {el.validations?.some((v) => v.type === "required") && (
                  <span className="text-red-500"> *</span>
                )}
              </label>
              {el.type === "SELECT" ? (
                <select
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData[el.id]}
                  onChange={(e) => handleChange(el.id, e.target.value)}
                >
                  {el.options?.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData[el.id]}
                  onChange={(e) => handleChange(el.id, e.target.value)}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-4">
          {currentStepIndex > 0 && (
            <button
              onClick={() => setCurrentStepIndex(currentStepIndex - 1)}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
            >
               Précédent
            </button>
          )}

          {currentStepIndex < steps.length - 1 ? (
            <button
              onClick={() => setCurrentStepIndex(currentStepIndex + 1)}
              className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Suivant 
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="ml-auto bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
               Valider
            </button>
          )}
        </div>

        {errors.length > 0 && (
          <div className="mt-6 bg-red-100 border border-red-300 text-red-700 p-4 rounded-xl">
            <p className="font-semibold mb-2">
              ⚠️ Veuillez remplir les champs obligatoires :
            </p>
            <ul className="list-disc ml-5">
              {errors.map((label, i) => (
                <li key={i}>{label}</li>
              ))}
            </ul>
          </div>
        )}

        {submitted && (
          <>
            <div className="mt-6 bg-green-100 border border-green-300 text-green-700 p-4 rounded-xl font-semibold">
              ✅ Formulaire envoyé avec succès !
            </div>

            <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-bold mb-4 text-gray-700">📋 Résumé :</h2>
              <ul className="space-y-2">
                {steps.flatMap((step) =>
                  step.elements.map((el) => {
                    const rawValue = formData[el.id];
                    let displayValue = rawValue;

                    if (el.type === "SELECT") {
                      const found = el.options?.find((opt) => opt.id === rawValue);
                      displayValue = found?.label || rawValue;
                    }

                    return (
                      <li key={el.id}>
                        <span className="font-medium text-gray-800">{el.label} :</span>{" "}
                        <span className="text-gray-700">{displayValue}</span>
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
