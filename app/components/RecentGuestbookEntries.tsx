"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface GuestbookEntry {
  _id: string;
  name: string;
  location: string;
  message: string;
  createdAt: string;
}

interface Props {
  refreshTrigger: number;
}

const RecentGuestbookEntries: React.FC<Props> = ({ refreshTrigger }) => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);

  useEffect(() => {
    fetchEntries();
  }, [refreshTrigger]);

  const fetchEntries = async () => {
    try {
      console.log("Fetching recent guestbook entries...");
      const response = await fetch("/api/guestbook?limit=3");
      console.log("Response status:", response.status);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Failed to fetch entries: ${response.status} ${errorData.message}`
        );
      }
      const data = await response.json();
      console.log("Fetched recent entries:", data);
      setEntries(data.entries);
    } catch (error) {
      console.error("Error fetching recent guestbook entries:", error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <section className="bg-black text-white py-10">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-center text-3xl mb-8 font-bold">
          Recent Guestbook Entries
        </h2>
        <div className="space-y-4">
          {entries.map((entry) => (
            <div key={entry._id} className="bg-[#333] rounded-lg p-4 shadow-md">
              <p className="font-bold text-lg mb-1">Name: {entry.name}</p>
              {entry.location && (
                <p className="text-sm text-gray-400 mb-2">
                  Location: {entry.location}
                </p>
              )}
              <p className="text-sm break-words whitespace-pre-wrap">
                {entry.message}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                {formatDate(entry.createdAt)}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/guestbook" className="btn-custom">
            View All Entries
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentGuestbookEntries;
