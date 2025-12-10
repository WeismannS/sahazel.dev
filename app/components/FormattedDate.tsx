"use client";

import { formatDate } from "@/lib/utils";

export function FormattedDate({ date }: { date: Date }) {
    return <span className="text-sm text-muted mt-2">{formatDate(date)}</span>;
}
