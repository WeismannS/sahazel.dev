"use client";

import { formatDate } from "@/lib/utils";
import { useEffect, useState } from "react";

export function FormattedDate({ date }: { date: Date }) {
    const [formattedDate, setFormattedDate] = useState(formatDate(date));
    useEffect(() => {
        setFormattedDate(formatDate(date));
    }, [date]);
    return <span className="text-sm text-muted mt-2">{formattedDate}</span>;
}
