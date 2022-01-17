import Image from "next/image";
import { ICountry } from "../../../utils/interfaces";
import styles from "./style.module.css";

interface TopSettingProps {
	country: ICountry | undefined;
}

export const TopSetting: React.FC<TopSettingProps> = ({ country }) => {
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
					<p>
						<span className={styles.icon}>
							<Image src={`/assets/images/countries/${country?.shortcode}.svg`} alt={country?.name} width={25} height={15} />
						</span>
						<span>
							{country?.code} ({country?.symbol})
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};
