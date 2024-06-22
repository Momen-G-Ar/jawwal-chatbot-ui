import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const PDFDialog = ({ show, handleOpenPDF, handleClose, candidates }) => {
    return (
        <React.Fragment>
            <Dialog
                open={show}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ color: "green" }}>
                    {"Relevant References"}
                </DialogTitle>
                {(candidates || []).map((candidate) => {
                    return (
                        <>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    <span
                                        style={{
                                            color: "green",
                                            fontWeight: "900",
                                        }}
                                    >
                                        Q:&nbsp;
                                    </span>
                                    {candidate.question}
                                </DialogContentText>
                                <DialogContentText id="alert-dialog-description">
                                    <span
                                        style={{
                                            color: "green",
                                            fontWeight: "900",
                                        }}
                                    >
                                        A:&nbsp;
                                    </span>
                                    {candidate.answer
                                        .split("\n")
                                        .map((chunk, ind) => {
                                            return (
                                                <>
                                                    {ind !== 0 && <br />}
                                                    {chunk}
                                                </>
                                            );
                                        })}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    onClick={() => handleOpenPDF(candidate.pdf)}
                                    autoFocus
                                    sx={{
                                        color: "white",
                                        backgroundColor: "green",
                                        "&:hover": {
                                            backgroundColor: "darkgreen",
                                        },
                                        borderRadius: "10px",
                                    }}
                                >
                                    Open PDF file
                                </Button>
                            </DialogActions>
                        </>
                    );
                })}
            </Dialog>
        </React.Fragment>
    );
};

export default PDFDialog;
