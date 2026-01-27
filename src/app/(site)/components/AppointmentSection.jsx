"use client";

import { useState } from "react";

export default function AppointmentSection() {
    const [step, setStep] = useState(1);
    const [selectedScope, setSelectedScope] = useState(null);
    const [selectedBudget, setSelectedBudget] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthName = currentDate.toLocaleString("default", { month: "long" });

    const goPrevMonth = () =>
        setCurrentDate(new Date(year, month - 1, 1));
    const goNextMonth = () =>
        setCurrentDate(new Date(year, month + 1, 1));
    const handleSubmit = () => {
        const payload = {
            scope: selectedScope,
            budget: selectedBudget,
            date: `${monthName} ${selectedDay}, ${year}`,
            time: selectedTime,
            ...formData,
        };

        console.log("SUBMITTED DATA:", payload);
    };
    return (
        <section
            id="Appointment"
            className="min-h-screen bg-gradient-to-br from-[#eef3fb] via-white to-[#f3f6fc] text-gray-900 md:p-6 p-3 flex justify-center"
        >
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 md:px-4 px-2">
                <div className="flex flex-col justify-start mt-6">
                    <div>
                        <div className="bg-[#0b1a3a]/10 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center shadow-md">
                            <span className="text-3xl">📨</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#0b1a3a]">
                            Let’s build <br />
                            something <br />
                            <span className="text-[#faa61a]">
                                extraordinary.
                            </span>
                        </h2>

                        <p className="text-gray-600 mt-5 max-w-md text-lg">
                            Your vision, our expertise. Start your project today and let’s
                            craft a digital experience that truly stands out.
                        </p>

                        <div className="md:mt-12 mt-8 space-y-6">
                            <div className="bg-white/70 backdrop-blur-md p-5 rounded-xl max-w-sm shadow-lg border border-gray-200">
                                <p className="text-[#0b1a3a] text-sm font-semibold">OFFICES</p>
                                <p className="mt-1 font-medium text-gray-800">
                                    H-18, Kalkaji Main Road <br /> New Delhi 110019
                                </p>
                            </div>

                            <div className="bg-white/70 backdrop-blur-md p-5 rounded-xl max-w-sm shadow-lg border border-gray-200">
                                <p className="text-[#0b1a3a] text-sm font-semibold">PHONE</p>
                                <p className="mt-1 font-medium text-gray-800">
                                    +91 9650638829
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-start mt-10">
                    <div className="w-full bg-white/80 backdrop-blur-xl p-4 md:p-6 rounded-2xl shadow-xl border border-gray-200">
                        {step === 1 && (
                            <>
                                <p className="text-sm text-gray-600">Step 1 of 4</p>
                                <h2 className="text-3xl font-semibold mt-2 text-[#0b1a3a]">
                                    Project Scope
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Tell us what you need help with.
                                </p>

                                <div>
                                    <p className="mb-2 text-gray-700">I need help with…</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {[
                                            "New Website",
                                            "Existing Website",
                                            "New Feature",
                                            "Migration",
                                            "Urgent Help",
                                        ].map((item) => (
                                            <button
                                                key={item}
                                                onClick={() => setSelectedScope(item)}
                                                className={`px-4 py-2 rounded-lg border ${selectedScope === item
                                                        ? "bg-[#0b1a3a] text-white"
                                                        : "bg-white border-gray-200"
                                                    }`}
                                            >
                                                {item}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <p className="mb-2 text-gray-700">My budget is…</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {[
                                            "Below ₹15,000",
                                            "₹15,000–₹30,000",
                                            "₹30,000–₹50,000",
                                            "₹50,000–₹80,000",
                                            "₹80,000–₹1,00,000",
                                            "₹1,00,000+",
                                        ].map((item) => (
                                            <button
                                                key={item}
                                                onClick={() => setSelectedBudget(item)}
                                                className={`px-4 py-2 rounded-lg border ${selectedBudget === item
                                                        ? "bg-[#0b1a3a] text-white"
                                                        : "bg-white border-gray-200"
                                                    }`}
                                            >
                                                {item}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    disabled={!selectedScope || !selectedBudget}
                                    onClick={() => setStep(2)}
                                    className="mt-7 w-full bg-[#0b1a3a] text-white py-3 rounded-xl disabled:opacity-50"
                                >
                                    Next Step →
                                </button>
                            </>
                        )}
                        {step === 2 && (
                            <>
                                <p className="text-sm text-gray-500">Step 2 of 4</p>
                                <h2 className="text-3xl font-semibold mt-2 text-[#0b1a3a]">
                                    Schedule a Date
                                </h2>

                                <div className="bg-white/70 rounded-xl p-6 border border-gray-200 shadow-inner mt-6">
                                    <div className="flex justify-between mb-4">
                                        <button onClick={goPrevMonth}>←</button>
                                        <h3>{monthName} {year}</h3>
                                        <button onClick={goNextMonth}>→</button>
                                    </div>

                                    <div className="grid grid-cols-7 gap-2">
                                        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => (
                                            <button
                                                key={day}
                                                onClick={() => setSelectedDay(day)}
                                                className={`h-10 w-10 rounded-full ${selectedDay === day
                                                    ? "bg-[#0b1a3a] text-white"
                                                    : "hover:bg-[#0b1a3a]/10"
                                                    }`}
                                            >
                                                {day}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between mt-6">
                                    <button onClick={() => setStep(1)}>Back</button>
                                    <button
                                        onClick={() => setStep(3)}
                                        className="bg-[#0b1a3a] text-white py-3 px-6 rounded-xl"
                                    >
                                        Next Step →
                                    </button>
                                </div>
                            </>
                        )}
                        {step === 3 && (
                            <>
                                <p className="text-sm text-gray-500">Step 3 of 4</p>
                                <h2 className="text-3xl font-semibold mt-2 text-[#0b1a3a]">
                                    Select a Time
                                </h2>

                                <div className="grid grid-cols-3 gap-3 mt-6">
                                    {[
                                        "09:00", "10:00", "11:00", "12:00",
                                        "13:00", "14:00", "15:00", "16:00",
                                        "17:00", "18:00", "19:00", "20:00",
                                    ].map(time => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={`py-2 rounded-lg border ${selectedTime === time
                                                ? "bg-[#0b1a3a] text-white"
                                                : "bg-white border-gray-200 hover:border-[#0b1a3a]"
                                                }`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex justify-between mt-6">
                                    <button onClick={() => setStep(2)}>Back</button>
                                    <button
                                        onClick={() => setStep(4)}
                                        className="bg-[#0b1a3a] text-white py-3 px-6 rounded-xl"
                                    >
                                        Next Step →
                                    </button>
                                </div>
                            </>
                        )}
                        {step === 4 && (
                            <>
                                <p className="text-sm text-gray-500">Step 4 of 4</p>
                                <h2 className="text-3xl font-semibold mt-2 text-[#0b1a3a]">
                                    Your Details
                                </h2>
                                <p className="text-gray-500 mb-6">
                                    Where should we send the confirmation?
                                </p>

                                <div className="space-y-4">
                                    <input
                                        className="w-full bg-white/80 border border-gray-200 p-3 rounded-lg"
                                        placeholder="Full Name*"
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                    />
                                    <input
                                        className="w-full bg-white/80 border border-gray-200 p-3 rounded-lg"
                                        placeholder="Email Address*"
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                    />
                                    <input
                                        className="w-full bg-white/80 border border-gray-200 p-3 rounded-lg"
                                        placeholder="Phone (Optional)"
                                        onChange={(e) =>
                                            setFormData({ ...formData, phone: e.target.value })
                                        }
                                    />
                                    <textarea
                                        className="w-full bg-white/80 border border-gray-200 p-3 rounded-lg h-32"
                                        placeholder="Project goals, timeline, or specific requirements..."
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                    />
                                </div>

                                <div className="flex justify-between mt-6">
                                    <button onClick={() => setStep(3)}>Back</button>
                                    <button className="bg-[#0b1a3a] text-white py-3 px-6 rounded-xl shadow-lg">
                                        Confirm Booking
                                    </button>
                                </div>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </section>
    );
}
