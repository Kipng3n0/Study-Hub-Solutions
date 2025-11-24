const WHATSAPP_NUMBER = '254703252300'
const DEFAULT_MESSAGE = 'Hi Study Hub Solutions, I need help with my assignment.'

export function FloatingWhatsApp() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Need Help? Chat with us on WhatsApp"
      className="fixed z-50 right-4 bottom-4 sm:right-6 sm:bottom-6"
    >
      <div className="flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-lg px-4 py-2 sm:px-5 sm:py-3 hover:bg-[#1ebe5d] transition-smooth">
        <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">
          Need Help?
        </span>
        <div className="flex items-center justify-center rounded-full bg-white/10 h-10 w-10">
          {/* WhatsApp logo SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="h-6 w-6"
          >
            <circle cx="16" cy="16" r="16" fill="#25D366" />
            <path
              fill="#fff"
              d="M23.5 17.2c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1.1 2.7 1.2 2.9.1.2 2.2 3.4 5.2 4.7 3.1 1.2 3.1.8 3.6.8.5 0 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"
            />
          </svg>
        </div>
      </div>
    </a>
  )
}
