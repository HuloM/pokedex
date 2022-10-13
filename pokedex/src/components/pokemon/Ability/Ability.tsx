import { useEffect, useState } from "react";
import AbilityData from "./AbilityDataType";
import AbilityProp from "./AbilityPropType";

function Ability(props: AbilityProp) {
    const ability = props.ability;

    const [abilityData, setAbilityData] = useState<Partial<AbilityData>>({
        flavor_text_entries: {
            flavor_text: "",
            language: {},
        },
        name: "",
    });

    useEffect(() => {
        const getAbilityData = async function () {
            const response = await fetch(ability.ability.url, {
                method: "GET",
            });
            const data = await response.json();

            for (const entry of data.flavor_text_entries) {
                if (entry.language.name === "en") {
                    data.flavor_text_entries = entry;
                    break;
                }
            }
            setAbilityData(data);
        };
        getAbilityData();
    }, []);

    return (
        <div className="w-auto h-auto fs-5">
            <b>{ability.ability.name}</b>
            {ability.is_hidden && (
                <span className="text-primary"> (Hidden ability)</span>
            )}
            <p>
                {abilityData.flavor_text_entries &&
                    abilityData.flavor_text_entries.flavor_text}
            </p>
        </div>
    );
}

export default Ability;
