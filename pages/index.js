import DatePicker from 'react-datepicker'
import { useState } from 'react'

export default function Home() {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date().setMonth(startDate.getMonth() + 1))

    return (
        <div className="bg-gray-100">
            <div className="flex items-center justify-center max-w-2xl min-h-screen mx-auto space-x-4">
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
                        popperClassName="react-datepicker-left"
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
                        popperClassName="react-datepicker-right"
                    />
                </div>
            </div>
        </div>
    )
}
