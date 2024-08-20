import { Box, Grid } from "@radix-ui/themes"

export default function ({ children }) {
    return <div className="fixed inset-0 flex items-center justify-center w-">
        <Box width="70%" className="px-4 mx-auto mt-5">
            <Grid
                columns={{ base: "1", md: "2" }}
                gap="2"
                width="auto"
                className="w-full"
            >
                {children}
            </Grid>
        </Box>
    </div>
}