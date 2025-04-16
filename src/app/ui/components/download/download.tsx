import { HiChevronRight } from "react-icons/hi";

export function Download() {
    return (
        <div className="flex flex-col items-center justify-center text-center mt-[7%]">
            <h2 className="text-2xl font-bold text-[var(--text-color)]">Download APP</h2>
            <p className="text-[var(--primary-color)] font-semibold text-lg mt-2">UrbanFlow</p>
            <button className="flex justify-center mt-4 border rounded-[50px] bg-[var(--text-color)] px-6 py-4 text-[var(--bg-color)] cursor-pointer">
                Baixar <div className="mt-[5%]"><HiChevronRight /></div>
            </button>
        </div>
    )
}