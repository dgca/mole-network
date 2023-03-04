import { Network } from "alchemy-sdk";

export type ExtractionSpec = {
	chain_id?: string;
	source_type: "block" | "block-transactions" | "block-transactions-contract" | "nft-prices";
	block_start?: number;
	block_end?: number;
} | {
	source_type: "nft-prices";
	collection_address: string;
};

export type EventSpec = {
	block_start?: number;
	block_end?: number;
	chain_id?: Network;
	contract_id?: string;
	extract: ExtractionSpec[];
	event: string;
	handler: string;
};

export type ETLSpecification = {
	chain_id: Network;
	contract_id: string;
	target_contract_id: string;
	events: EventSpec[];
	handlers: string;
}