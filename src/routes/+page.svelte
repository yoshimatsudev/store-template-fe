<script>
	// @ts-nocheck

	export let data;
	const { count, offset, limit, product_categories } = data;
	console.log({ count, offset, limit, product_categories });
</script>

<ul>
	{#if count === 0}
		<p>no categories to show</p>
	{:else}
		<p>{product_categories}}</p>
	{/if}
</ul>
