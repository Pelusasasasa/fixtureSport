import Country from "@/components/Country"
import League from "@/components/League";
import { getConutryForCode, getLegueForCode } from "@/helper/Football/helper"

const page = async({params}) => {
    const country = await getConutryForCode(params.code);
    const leagues = await getLegueForCode(params.code);
    return (
        <section>
            <main className="flex items-center justify-center">
                <Country country={country}/>
            </main>
            <main className="grid grid-cols-4 gap-2 mx-4 hover:cursor-pointer px-2 py-4">
                {leagues.map(({league}) => (
                    <League league={league}/>
                ))}
            </main>
        </section>
  )
}

export default page