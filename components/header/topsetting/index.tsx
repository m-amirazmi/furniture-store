import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { countries } from "data/countries";
import { ICountry } from "utils/interfaces";
import styles from "./style.module.css";

interface TopSettingProps {
	country: ICountry | undefined;
	setCountry: Dispatch<SetStateAction<string>>;
}

export const TopSetting: React.FC<TopSettingProps> = ({ country, setCountry }) => {
	const [showCountries, setShowCountries] = useState<boolean>(false);

	return (
		<div className={styles.topsettingcontainer}>
			<div className={styles.topsettingsubcontainer}>
				<p>Call: +1 078 2376</p>
				<div className={styles.topsettingitemscontainer}>
					<p>
						<span className={styles.icon}>
							<Image src="/assets/icons/user.svg" alt="Login" width={18} height={18} objectFit="cover" />
						</span>
						<span>Login</span>
					</p>
					<p className={styles.country} onClick={() => setShowCountries(!showCountries)}>
						<span className={styles.icon}>
							<Image src={`/assets/images/countries/${country?.shortcode}.svg`} alt={country?.name} width={25} height={15} />
						</span>
						<span>
							{country?.code} ({country?.symbol})
						</span>
						{showCountries && (
							<div className={styles.countries}>
								{countries.map((c) => (
									<p key={c.id} className={c.code === country?.code ? styles.selected : ""} onClick={() => setCountry(c.id)}>
										<span className={styles.icon}>
											<Image src={`/assets/images/countries/${c?.shortcode}.svg`} alt={country?.name} width={25} height={15} objectFit="contain" />
										</span>
										<span>
											{c?.code} ({c?.symbol})
										</span>
									</p>
								))}
							</div>
						)}
					</p>
				</div>
			</div>
		</div>
	);
};
