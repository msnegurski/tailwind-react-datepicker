import DatePicker from 'react-datepicker'
import { useState } from 'react'

export default function Home() {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date().setMonth(startDate.getMonth() + 1))

    return (
        <div className="min-h-screen flex items-center max-w-2xl mx-auto justify-center space-x-4">
            <div className="relative">
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    nextMonthButtonLabel=">"
                    previousMonthButtonLabel="<"
                />
            </div>
            <div className="relative">
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    nextMonthButtonLabel=">"
                    previousMonthButtonLabel="<"
                />
            </div>
        </div>
    )
}
