<template>
    <Page>
        <ActionBar :title="$route.path">
        </ActionBar>
        <StackLayout>
            <Button @tap="$router.push('/detail')">I want details!</Button>
        </StackLayout>
    </Page>
</template>
