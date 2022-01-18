import Image from "next/image";
import { useState } from "react";
import styles from "./style.module.css";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useCountry } from "hooks/useCountry";

export const TopSetting: React.FC = () => {
	const [showCountries, setShowCountries] = useState<boolean>(false);
	const { country, countries } = useSelector((state: RootState) => state.currencies);
	const { handleClick } = useCountry();

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
							<Image src={`/assets/images/countries/${country?.shortCode}.svg`} alt={country?.name} width={25} height={15} />
						</span>
						<span>
							{country?.currencyCode} ({country?.symbol})
						</span>
						{showCountries && (
							<div className={styles.countries}>
								{countries.map((c) => (
									<p key={c.id} className={c.currencyCode === country?.currencyCode ? styles.selected : ""} onClick={() => handleClick(c.shortCode)}>
										<span className={styles.icon}>
											<Image src={`/assets/images/countries/${c?.shortCode}.svg`} alt={country?.name} width={25} height={15} objectFit="contain" />
										</span>
										<span>
											{c?.currencyCode} ({c?.symbol})
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
