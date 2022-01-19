import Image from "next/image";
import { useState } from "react";
import styles from "./style.module.css";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useCountry } from "hooks/useCountry";
import Skeleton from "react-loading-skeleton";

export const TopSetting: React.FC = () => {
	const [showCountries, setShowCountries] = useState<boolean>(false);
	const { country, countries } = useSelector((state: RootState) => state.currencies);
	const { setCountry, loading } = useCountry();

	return (
		<div className={styles.topsettingcontainer}>
			<div className={styles.topsettingsubcontainer}>
				<p>Call: +60 1119821105</p>
				<div className={styles.topsettingitemscontainer}>
					<p>
						<span className={styles.icon}>
							<Image src="/assets/icons/user.svg" alt="Login" width={18} height={18} objectFit="cover" />
						</span>
						<span>Login</span>
					</p>
					{!loading ? (
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
										<p key={c.id} className={c.currencyCode === country?.currencyCode ? styles.selected : ""} onClick={() => setCountry(c.shortCode)}>
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
					) : (
						<p style={{ width: "110px" }}>
							<Skeleton count={1} height={18} />
						</p>
					)}
				</div>
			</div>
		</div>
	);
};
