"use client";

import { TableHead, TableRow, TableHeader, TableBody, Table } from "gs-awds";

export function UsersTable() {
  return (
    <>
      <form className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[150px]">Name</TableHead>
              <TableHead className="hidden md:table-cell">Email</TableHead>
              <TableHead className="hidden md:table-cell">Username</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody></TableBody>
        </Table>
      </form>
    </>
  );
}
