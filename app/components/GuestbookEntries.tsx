"use client";

import React, { useState, useEffect } from "react";

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

const GuestbookEntries: React.FC<Props> = ({ refreshTrigger }) => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchEntries();
  }, [refreshTrigger]);

  const fetchEntries = async () => {
    try {
      console.log("Fetching guestbook entries...");
      const response = await fetch("/api/guestbook");
      console.log("Response status:", response.status);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Failed to fetch entries: ${response.status} ${errorData.message}`
        );
      }
      const data = await response.json();
      console.log("Fetched entries:", data);
      setEntries(data);
    } catch (error) {
      console.error("Error fetching guestbook entries:", error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const displayedEntries = showAll ? entries : entries.slice(0, 3);

  return (
    <section className="bg-black text-white py-10">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-center text-3xl mb-8 font-bold">
          Recent Guestbook Entries
        </h2>
        <div className="space-y-4">
          {displayedEntries.map((entry) => (
            <div key={entry._id} className="bg-[#333] rounded-lg p-4 shadow-md">
              <p className="font-bold">Name: {entry.name}</p>
              {entry.location && (
                <p className="text-sm text-gray-400">
                  Location: {entry.location}
                </p>
              )}
              <p className="mt-2">{entry.message}</p>
              <p className="text-xs text-gray-400 mt-2">
                {formatDate(entry.createdAt)}
              </p>
            </div>
          ))}
        </div>
        {entries.length > 3 && (
          <div className="mt-8 text-center">
            {showAll ? (
              <button onClick={() => setShowAll(false)} className="btn-custom">
                Show Less
              </button>
            ) : (
              <p className="text-lg">
                Would you like to see more? <span className="font-bold">Y</span>{" "}
                or <span className="font-bold">N</span>
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default GuestbookEntries;
