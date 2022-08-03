export const Error = ({ message }: { message: string }) => {
  return (
    <div className="w-full py-2.5 px-5 mr-2 text-lg font-semibold inline-flex items-center">
      {message}
    </div>
  )
}
