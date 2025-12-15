import ReactMarkdown from 'react-markdown'
import { CopyButton } from './CopyButton'

function extractText(children) {
  if (typeof children === 'string') return children
  if (Array.isArray(children)) {
    return children
      .map(child => extractText(child))
      .join('')
  }
  if (children?.props?.children) {
    return extractText(children.props.children)
  }
  return ''
}

const Pre = ({ children }) => {
  const text = extractText(children)
  
  return (
    <div className="relative group my-4 rounded-lg overflow-hidden border border-zinc-700 dark:border-zinc-700 bg-[#1e1e1e]">
      <CopyButton text={text} />
      <pre className="!m-0 !p-4 !bg-[#1e1e1e] overflow-x-auto text-sm">
        {children}
      </pre>
    </div>
  )
}

const Code = ({ inline, className, children, ...props }) => {
  if (inline) {
    return (
      <code className="bg-zinc-800 dark:bg-zinc-700 px-1.5 py-0.5 rounded text-sm text-pink-400 dark:text-pink-300 font-mono" {...props}>
        {children}
      </code>
    )
  }
  
  return (
    <code className="font-mono text-sm" {...props}>
      {children}
    </code>
  )
}

const Paragraph = ({ children }) => {
  const text = extractText(children)
  
  return (
    <div className="relative group py-2">
      {text.length > 20 && <CopyButton text={text} />}
      <p className="leading-7 text-zinc-700 dark:text-zinc-300">
        {children}
      </p>
    </div>
  )
}

const Heading = ({ level, children }) => {
  const id = extractText(children)
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')

  const className = {
    1: 'text-4xl font-bold mt-8 mb-4 text-zinc-900 dark:text-white scroll-mt-20',
    2: 'text-3xl font-bold mt-6 mb-3 text-zinc-900 dark:text-white scroll-mt-20',
    3: 'text-2xl font-semibold mt-5 mb-2 text-zinc-800 dark:text-zinc-100 scroll-mt-20',
    4: 'text-xl font-semibold mt-4 mb-2 text-zinc-800 dark:text-zinc-100 scroll-mt-20',
    5: 'text-lg font-semibold mt-3 mb-1 text-zinc-700 dark:text-zinc-200',
    6: 'text-base font-semibold mt-2 mb-1 text-zinc-700 dark:text-zinc-200'
  }[level]

  const Tag = `h${level}`

  return (
    <Tag id={id} className={className}>
      <a href={`#${id}`} className="no-underline hover:underline text-inherit">
        {children}
      </a>
    </Tag>
  )
}

const Link = ({ href, children }) => {
  const isExternal = href?.startsWith('http')
  
  return (
    <a 
      href={href} 
      className="text-blue-600 dark:text-blue-400 hover:underline"
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  )
}

const List = ({ ordered, children }) => {
  const className = ordered 
    ? 'list-decimal list-inside ml-4 mb-4' 
    : 'list-disc list-inside ml-4 mb-4'
  
  return <ul className={className}>{children}</ul>
}

const ListItem = ({ children }) => {
  return <li className="text-zinc-700 dark:text-zinc-300 mb-1">{children}</li>
}

const BlockQuote = ({ children }) => {
  return (
    <blockquote className="border-l-4 border-zinc-400 dark:border-zinc-600 pl-4 my-4 italic text-zinc-600 dark:text-zinc-400">
      {children}
    </blockquote>
  )
}

export function MarkdownRenderer({ content }) {
  return (
    <ReactMarkdown
      components={{
        pre: Pre,
        code: Code,
        p: Paragraph,
        h1: ({ children }) => <Heading level={1}>{children}</Heading>,
        h2: ({ children }) => <Heading level={2}>{children}</Heading>,
        h3: ({ children }) => <Heading level={3}>{children}</Heading>,
        h4: ({ children }) => <Heading level={4}>{children}</Heading>,
        h5: ({ children }) => <Heading level={5}>{children}</Heading>,
        h6: ({ children }) => <Heading level={6}>{children}</Heading>,
        a: Link,
        ul: List,
        ol: ({ children }) => <List ordered={true}>{children}</List>,
        li: ListItem,
        blockquote: BlockQuote,
        hr: () => <hr className="my-4 border-zinc-300 dark:border-zinc-700" />,
        table: ({ children }) => (
          <div className="overflow-x-auto my-4">
            <table className="w-full border-collapse border border-zinc-300 dark:border-zinc-700">
              {children}
            </table>
          </div>
        ),
        th: ({ children }) => (
          <th className="border border-zinc-300 dark:border-zinc-700 p-2 bg-zinc-100 dark:bg-zinc-800 text-left font-semibold">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="border border-zinc-300 dark:border-zinc-700 p-2">
            {children}
          </td>
        ),
        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
