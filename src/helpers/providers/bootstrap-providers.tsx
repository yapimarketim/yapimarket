"use client";
import React, { useEffect, ReactNode } from "react";

interface BootstrapProviderProps {
	children: ReactNode;
}

const BootstrapProvider: React.FC<BootstrapProviderProps> = ({ children }) => {
	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);

	return <>{children}</>;
};

export default BootstrapProvider;