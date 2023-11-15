type NumberCard = {
    number: string;
    title: string;
}

function NumberCard({ number, title }: NumberCard) {
    return (
        <div className='hover:shadow-lg flex flex-col gap-y-3 aspect-square items-center justify-center text-center bg-white dark:bg-darkBg p-3 md:p-0 rounded-xl text-black/80 dark:text-white md:w-[170px] md:h-[110px] 2xl:w-[220px] 2xl:h-[170px]'>
            <span className='text-base 2xl:text-lg font-semibold'>{title}</span>
            <span className='text-base 2xl:text-lg font-semibold'>{number}</span>
        </div>
    )
}

export default NumberCard
