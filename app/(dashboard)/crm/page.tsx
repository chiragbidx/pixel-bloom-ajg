"use client";

import React, { useState } from "react";

type Company = {
  id: string;
  name: string;
  domain: string;
};

type Deal = {
  id: string;
  title: string;
  amount: string;
  status: "Open" | "Won" | "Lost";
  companyId: string;
};

const mockCompanies: Company[] = [
  { id: "1", name: "Acme Corp", domain: "acme.com" },
  { id: "2", name: "Globex Inc.", domain: "globex.com" },
];

const mockDeals: Deal[] = [
  { id: "1", title: "Acme Renewal", amount: "5000", status: "Open", companyId: "1" },
  { id: "2", title: "Globex Upgrade", amount: "12000", status: "Won", companyId: "2" },
];

export default function CRMHome() {
  const [tab, setTab] = useState<"companies" | "deals">("companies");

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1.5rem" }}>CRM (Companies & Deals)</h1>
      <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
        <button
          type="button"
          style={{
            padding: "0.5rem 1rem",
            fontWeight: tab === "companies" ? 700 : 400,
            borderBottom: tab === "companies" ? "2px solid #4B9CE2" : "2px solid transparent",
            background: "transparent",
            cursor: "pointer"
          }}
          onClick={() => setTab("companies")}
        >
          Companies
        </button>
        <button
          type="button"
          style={{
            padding: "0.5rem 1rem",
            fontWeight: tab === "deals" ? 700 : 400,
            borderBottom: tab === "deals" ? "2px solid #4B9CE2" : "2px solid transparent",
            background: "transparent",
            cursor: "pointer"
          }}
          onClick={() => setTab("deals")}
        >
          Deals
        </button>
      </div>
      {tab === "companies" && (
        <section aria-label="Company list">
          <h2 style={{ fontSize: "1.25rem", marginBottom: 12 }}>Companies</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: 8 }}>Name</th>
                <th style={{ textAlign: "left", padding: 8 }}>Domain</th>
              </tr>
            </thead>
            <tbody>
              {mockCompanies.map((company) => (
                <tr key={company.id} style={{ borderBottom: "1px solid #EEE" }}>
                  <td style={{ padding: 8 }}>{company.name}</td>
                  <td style={{ padding: 8 }}>{company.domain}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
      {tab === "deals" && (
        <section aria-label="Deal list">
          <h2 style={{ fontSize: "1.25rem", marginBottom: 12 }}>Deals</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: 8 }}>Title</th>
                <th style={{ textAlign: "left", padding: 8 }}>Company</th>
                <th style={{ textAlign: "right", padding: 8 }}>Amount</th>
                <th style={{ textAlign: "left", padding: 8 }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {mockDeals.map((deal) => {
                const company = mockCompanies.find((c) => c.id === deal.companyId);
                return (
                  <tr key={deal.id} style={{ borderBottom: "1px solid #EEE" }}>
                    <td style={{ padding: 8 }}>{deal.title}</td>
                    <td style={{ padding: 8 }}>{company ? company.name : "Unknown"}</td>
                    <td style={{ padding: 8, textAlign: "right" }}>${deal.amount}</td>
                    <td style={{ padding: 8 }}>{deal.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
}