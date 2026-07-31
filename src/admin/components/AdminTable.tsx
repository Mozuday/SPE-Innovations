import type { ReactNode } from "react";
import { Edit, Trash2 } from "lucide-react";

type AdminTableColumn<T> = {
  key: string;
  label: string;
  render?: (item: T) => ReactNode;
};

type AdminTableProps<T extends { id: string | number }> = {
  data: T[];
  columns: AdminTableColumn<T>[];
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  emptyMessage?: string;
};

const AdminTable = <T extends { id: string | number }>({
  data,
  columns,
  onEdit,
  onDelete,
  emptyMessage = "No records found.",
}: AdminTableProps<T>) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          {/* Table Header */}
          <thead className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                >
                  {column.label}
                </th>
              ))}

              {(onEdit || onDelete) && (
                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Actions
                </th>
              )}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (onEdit || onDelete ? 1 : 0)}
                  className="px-6 py-12 text-center"
                >
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {emptyMessage}
                  </p>
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr
                  key={item.id}
                  className="transition hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className="px-6 py-5 text-sm text-slate-700 dark:text-slate-300"
                    >
                      {column.render
                        ? column.render(item)
                        : String(
                            item[
                              column.key as keyof T
                            ] ?? "-"
                          )}
                    </td>
                  ))}

                  {(onEdit || onDelete) && (
                    <td className="px-6 py-5">
                      <div className="flex justify-end gap-2">
                        {onEdit && (
                          <button
                            type="button"
                            onClick={() => onEdit(item)}
                            title="Edit"
                            className="rounded-lg p-2 text-slate-500 transition hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20"
                          >
                            <Edit size={18} />
                          </button>
                        )}

                        {onDelete && (
                          <button
                            type="button"
                            onClick={() => onDelete(item)}
                            title="Delete"
                            className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20"
                          >
                            <Trash2 size={18} />
                          </button>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;