import React from 'react';
import { motion } from 'framer-motion';

export default function Main() {
	return (
		<>
			<motion.div
				animate={{ scale: [1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1] }}
				transition={{ duration: 1.5, delay: 2 }}
				className="coffee"
			>
				<motion.div
					initial={{ y: -1300 }}
					animate={{ y: 0 }}
					transition={{ stiffness: 200, duration: 0.9, delay: 1 }}
					className="lid"
				></motion.div>

				<motion.div
					initial={{ y: -1300 }}
					animate={{ y: 0 }}
					transition={{ stiffness: 200, duration: 0.7, delay: 0.9 }}
					className="cover"
				></motion.div>

				<div className="logo">
					<motion.div
						initial={{ x: -1300 }}
						animate={{ x: 0 }}
						transition={{
							stiffness: 100,
							duration: 1.1,
							delay: 1.3,
						}}
						className="main"
					></motion.div>

					<motion.div
						initial={{ opacity: 0.1 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3, delay: 0.1 }}
						className="circle"
					>
						<h5>Coffee</h5>
					</motion.div>
				</div>

				<motion.div
					initial={{ y: -1300 }}
					animate={{ y: 0 }}
					transition={{ stiffness: 150, duration: 0.5, delay: 0.5 }}
					className="cup"
				></motion.div>
			</motion.div>
		</>
	);
}
