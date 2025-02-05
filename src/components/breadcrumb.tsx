import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbProps {
  path: string[]
}

export function Breadcrumb({ path }: BreadcrumbProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-blue-400">
            <Home className="w-4 h-4 mr-2" />
            My Drive
          </Link>
        </li>
        {path.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <Link
                href={`/${path.slice(0, index + 1).join("/")}`}
                className="ml-1 text-sm font-medium text-gray-400 hover:text-blue-400 md:ml-2"
              >
                {item}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}

