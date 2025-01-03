export function User({ name, roll }) {
    return (
        <div className="bg-rose-300 p-4 text-black m-2 w-44 h-44 border border-black">
            <h1>{name}</h1>
            <h2>{roll}</h2>
        </div>
    );
}
