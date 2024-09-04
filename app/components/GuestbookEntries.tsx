"use client";

import React, { useState, useEffect, useCallback } from "react";

interface GuestbookEntry {
  _id: string;
  name: string;
  location: string;
  message: string;
  createdAt: string;
}

interface Props {
  refreshTrigger: number;
  initialEntryCount: number;
}

const GuestbookEntries: React.FC<Props> = ({
  refreshTrigger,
  initialEntryCount,
}) => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [displayCount, setDisplayCount] = useState(initialEntryCount);
  const [totalEntries, setTotalEntries] = useState(0);

  const fetchEntries = useCallback(async () => {
    try {
      console.log("Fetching guestbook entries...");
      const response = await fetch(`/api/guestbook?limit=${displayCount}`);
      console.log("Response status:", response.status);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Failed to fetch entries: ${response.status} ${errorData.message}`
        );
      }
      const data = await response.json();
      console.log("Fetched entries:", data);
      setEntries(data.entries);
      setTotalEntries(data.total);
    } catch (error) {
      console.error("Error fetching guestbook entries:", error);
    }
  }, [displayCount]);

  useEffect(() => {
    fetchEntries();
  }, [refreshTrigger, fetchEntries]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const loadMore = () => {
    setDisplayCount((prevCount) => prevCount + 10);
  };

  return (
    <section className="bg-black text-white py-10">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-center text-3xl mb-8 font-bold">
          Guestbook Entries
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
        {totalEntries > displayCount && (
          <div className="mt-8 text-center">
            <button onClick={loadMore} className="btn-custom">
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GuestbookEntries;
