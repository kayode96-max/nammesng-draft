import React from 'react'
import clsx from 'clsx'

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx('bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700 rounded-xl shadow-soft card-hover', className)}>{children}</div>
}

export function CardBody({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx('p-6', className)}>{children}</div>
}

export function CardTitle({ className, children }: { className?: string; children: React.ReactNode }) {
  return <h3 className={clsx('text-lg font-semibold text-slate-900 dark:text-slate-100', className)}>{children}</h3>
}
