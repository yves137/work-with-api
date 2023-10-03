export function CustomButtons({handleClick}){
   return <button
        onClick={() => handleClick()}
        className="text-white text-2xl font-bold bg-red-600 py-4 px-20 hover:bg-red-700 rounded-md"
      >
        Fetch Random
      </button>
}